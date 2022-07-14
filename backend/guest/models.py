from django.db import models
from authentication.models import User


class Guest(models.Model):
    first_name = models.CharField(max_length= 40)
    last_name = models.CharField(max_length=40)
    email_address = models.CharField(max_length=40)
    phone_number = models.IntegerField(max_length=10)
    street = models.IntegerField(max_length=10)
    city = models.CharField(max_length=40)
    zip_code = models.IntegerField(max_length=10)
    date_of_visit = models.IntegerField(max_length=10)
    guest_of = models.CharField(max_length=80)
    

