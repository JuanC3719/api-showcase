from django.db import models

class MyData(models.Model):
    # Field to store the textual data input by users
    data = models.CharField(max_length=255)
    # Automatically set the timestamp when a record is created
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        # Return the data as a string representation of the object
        return self.data