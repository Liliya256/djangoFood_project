from django.shortcuts import render,redirect
from django.urls import path
from .models import Food, Image
def index(request):
    foods = Food.objects.all()
    return render(request, 'index.html', {'foods': foods})


def catalog(request):
    return render(request, 'catalog.html')

def create(request):
    if request.method == 'POST':
        name = request.POST['name']
        price = request.POST['price']
        image = request.POST['image']
        food = Food(name=name, price=price, image=image)
        food.save()
        return redirect('index')
    else:
        return render(request, 'create.html')

def contact (request):
    return render(request, 'contact.html')

def update(request, id):
    food = Food.objects.get(id=id)
    return render(request, 'update.html', {'food': food})