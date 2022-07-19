from rest_framework import serializers
from .models import Guest



class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = ['id', 'first_name', 'last_name', 'email_address', 'phone_number', 'address', 'city', 'zip_code','state', 'date_of_visit', 'guest_of']
        depth = 1