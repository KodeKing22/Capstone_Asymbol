from django.urls import path, include
from guest import views

urlpatterns = [
    path('', views.user_guests),
    path('all/', views.get_all_guests),
    path('<int:phonenumber>/', views.get_by_phone_number),
    path('date_of_visit/', views.get_by_date),
]
