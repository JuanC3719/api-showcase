from rest_framework import serializers
from .models import MyData

class MyDataSerializer(serializers.ModelSerializer):
    class Meta:
        # Define the model and fields to be included in the serialization
        model = MyData
        fields = ['data', 'created_at']
    
    def validate_data(self, value):
        # Validate that the 'data' field is not blank or empty
        if not value.strip():
            raise serializers.ValidationError('Data field cannot be blank.')
        return value