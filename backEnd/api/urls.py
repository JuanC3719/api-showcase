from django.urls import path
from .views import get_data, post_data

urlpatterns = [
    # URL pattern for handling GET requests to fetch the latest data entry
    path('api/data/', get_data, name='get_data'),
    
    # URL pattern for handling POST requests to create a new data entry
    path('api/data/create/', post_data, name='post_data'),
]