from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from .models import MyData
from .serializers import MyDataSerializer
import logging

# Set up logging
logger = logging.getLogger(__name__)

@api_view(['GET'])
def get_data(request):
    """
    Handle GET requests to fetch the latest data entry from the database.
    
    Returns:
        Response: A JSON response containing the latest data entry or an error message if no data is found.
    """
    try:
        latest_entry = MyData.objects.latest('created_at')
    except MyData.DoesNotExist:
        logger.error('No data found.')
        raise NotFound('No data available.')
    
    serializer = MyDataSerializer(latest_entry)
    return Response(serializer.data)

@api_view(['POST'])
def post_data(request):
    """
    Handle POST requests to create a new data entry in the database.
    
    Args:
        request (Request): The HTTP request containing the data to be posted.
    
    Returns:
        Response: A JSON response containing the posted data or error details if validation fails.
    """
    # Initialize serializer with the incoming data
    serializer = MyDataSerializer(data=request.data)
    
    if serializer.is_valid():
        # Save the data and log the successful operation
        serializer.save()
        logger.info('Data posted successfully.')
        return Response(serializer.data, status=201)  # HTTP 201 Created
    else:
        # Log the validation errors and return them in the response
        logger.error('Data post failed: %s', serializer.errors)
        return Response(serializer.errors, status=400)  # HTTP 400 Bad Request
