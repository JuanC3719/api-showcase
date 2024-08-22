from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import MyData

class MyDataTests(TestCase):
    def setUp(self):
        """
        Set up the APIClient instance for making requests in tests.
        """
        self.client = APIClient()

    def test_post_data(self):
        """
        Test the POST request to create a new data entry.
        - Makes a POST request with valid data.
        - Asserts that the response status is 201 Created.
        - Asserts that the response data matches the posted data.
        """
        response = self.client.post('/api/data/create/', {'data': 'Test data'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['data'], 'Test data')

    def test_post_data_blank_field(self):
        """
        Test the POST request with a blank data field.
        - Makes a POST request with a blank data field.
        - Asserts that the response status is 400 Bad Request.
        - Checks that the error message for the 'data' field contains the expected validation error.
        """
        response = self.client.post('/api/data/create/', {'data': ''}, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('This field may not be blank.', response.data['data'][0])

    def test_get_data(self):
        """
        Test the GET request to retrieve the latest data entry.
        - Creates a data entry in the database.
        - Makes a GET request to retrieve the data.
        - Asserts that the response status is 200 OK.
        - Asserts that the response data matches the data entry in the database.
        """
        MyData.objects.create(data='Sample data')
        response = self.client.get('/api/data/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['data'], 'Sample data')

    def test_get_data_no_entries(self):
        """
        Test the GET request when no data entries exist.
        - Makes a GET request when there are no entries in the database.
        - Asserts that the response status is 404 Not Found.
        """
        response = self.client.get('/api/data/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
