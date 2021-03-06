from tkinter import TRUE
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes


from .models import Guest
from .serializer import GuestSerializer  




@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_guests(request):
    guests = Guest.objects.all()
    serializer = GuestSerializer(guests, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([AllowAny])
def user_guests(request):
    if request.method == 'POST':
        serializer = GuestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_by_phone_number(request,phonenumber):
  
    if request.method == 'GET':
        guests = Guest.objects.filter(phone_number=phonenumber)
        serializer = GuestSerializer(guests, many= True)
        return Response(serializer.data)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_by_date(request,dateofvisit):
    if request.method == 'GET':
        guests = Guest.objects.filter(date_of_visit= dateofvisit)
        serializer = GuestSerializer(guests, many=True)
        return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_by_id(request,pk):
     if request.method == 'DELETE':
        guests = Guest.objects.get(pk=pk)
        guests.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_by_phone_number(request,phonenumber):
   if request.method == 'PUT': 
        guest = Guest.objects.get(phone_number= phonenumber)
        serializer = GuestSerializer(guest, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
