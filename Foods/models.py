from django.db import models

class Food(models.Model):
    name = models.CharField(max_length=100, null=True)
    description = models.TextField(null=True, default='Описание')
    price = models.DecimalField(max_digits=5, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
class Image(models.Model):
    food = models.ForeignKey(Food, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='photos/', default='photos/default.jpg')