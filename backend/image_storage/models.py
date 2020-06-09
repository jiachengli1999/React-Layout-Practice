from django.db import models

# Create your models here.
class image(models.Model):
    rest_name = models.CharField(max_length=100, default=None)
    category = models.CharField(max_length=100, default=None)
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images')
    price = models.DecimalField(max_digits=3, decimal_places=2, null=True)

