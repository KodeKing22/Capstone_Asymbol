from django.db import models
from phone_field import PhoneField


class Guest(models.Model):
    first_name = models.CharField(max_length= 40)
    last_name = models.CharField(max_length=40)
    email_address = models.EmailField(max_length=254)
    phone_number = PhoneField(null=True, help_text='Contact phone number')
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=40)
    zip_code = models.IntegerField(blank=5)
    state = models.CharField(max_length=20)
    date_of_visit = models.DateField(auto_now=True)
    guest_of = models.CharField(max_length=40)
    

