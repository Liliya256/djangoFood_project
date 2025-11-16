from django.shortcuts import render,redirect
from django.urls import path
from .models import Food, Image
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login

def index(request):
    foods = Food.objects.all()
    return render(request, 'index.html', {'foods': foods})



def catalog(request):
    catalog = Food.objects.all()
    return render(request, 'catalog.html', {'catalog':catalog})

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

def about (request):
    return render(request, 'about.html')

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html')