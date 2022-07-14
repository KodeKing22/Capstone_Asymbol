from rest_framework import serializers
from .models import Guest



class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = ['id', 'first_name', 'last_name', 'email_address', 'phone_number', 'street', 'city', 'zip_code', 'date_of_visit', 'guest_of']
        depth = 1