"""Backend URL Configuration

The core Python file that contains a link to all fo the URLs
"""


from django.contrib import admin
from django.urls import path
from django.urls import path, include

urlpatterns = [
    path('server/', admin.site.urls),
    path('database/', include("DatabaseHelper.urls")),
    path('emails/', include("EmailService.urls")),
    path('admin/', include("AdminService.urls")),
]
