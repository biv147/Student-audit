"""DatabaseHelper URL Configuration
URLs that lead the the database-related endpoints direct to here
"""

from django.urls import path, include
from EmailService import views

# URLs that define the endpoints
urlpatterns = [
    path('logout/', views.logout_email),
]