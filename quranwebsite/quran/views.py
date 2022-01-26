from django.shortcuts import render, HttpResponse, redirect
from django.http import Http404
from django.contrib.auth import authenticate, login, get_user_model
from .models import Hadis, Settings_main, Messages_contact, Aya, Messages_footer, Comments_aya
from .filters import AyaFilter
from .forms import Form_register, Form_footer, Form_contact, Form_login
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.db.models import F
import requests

#api
from django.contrib.auth.models import User, Group
from rest_framework import viewsets, permissions
from .serializers import AyaSerializer, Messages_contactSerializer, Messages_footerSerializer, HadisSerializer, Comments_ayaSerializer, UserSerializer

#first page

def first_page(request):
    
    context = {
        
    }

    return render (request, 'i.html', context)


#register page

User = get_user_model()

def register_page(request):


    if request.method == 'POST':


        form = Form_register(request.POST or None)

        if form.is_valid():
            
            fullName = form.cleaned_data.get('fullName')
            userName = form.cleaned_data.get('userName')
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password')

            newUser = User.objects.create_user(username=userName, email=email, password=password, first_name=fullName)
            print(newUser)

        
    else:
        form = Form_register()
    return render(request, 'register.html', {'form': form})


#login page
def login_page(request):
    if request.method == 'POST':

        form = Form_login(request.POST or None)

        userORemail = form.cleaned_data.get('userORemail')
        password = form.cleaned_data.get('password')
        
        

        user = authenticate(username=userORemail, password=password)

        if user is not None:
            login(request, user)

        else: 
            
            user = authenticate(email=userORemail, password=password)
            if user is not None:
                login(request, user)

            
            messages.error(request, "نام کاربری یا رمز عبور اشتباه می باشد")


    context = {

    }

    return render(request,'login.html', context)



#main page

def main_page(request):


    settings = Settings_main.objects.first()
    hadis = Hadis.objects.all()
    

    # footer suggestions
    contact_us = Form_footer(request.POST or None)

    if contact_us.is_valid():
        name = contact_us.cleaned_data.get("name")
        number = contact_us.cleaned_data.get("number")
        suggestion = contact_us.cleaned_data.get("suggustion")
        Messages_footer.objects.create(name = name,number = number ,suggestion = suggestion,is_read = False)
    



    aya = Aya.objects.all()
    ayaFilter = AyaFilter(request.GET, queryset = aya)
    

    
    
    context = {
        'settings' : settings,
        'aya' : aya,
        'hadis' : hadis,
        'ayaFilter': ayaFilter,
    }

    return render (request, 'i.html' , context)


#details page 

def details_page(request, ayaid, *args, **kwargs):


    aya = Aya.objects.filter(id=ayaid)
    
    if aya.exists() and aya.count()==0:
        aya=aya.first()

    else:
        raise Http404("does not exist")    

    context = {
        'aya': aya,
    }

    return render (request, 'i.html', context)


def contact_page(request):
       
    contact = Form_contact(request.POST or None)

    print(request.POST)
    if contact.is_valid():
        name = contact.cleaned_data.get("name")
        username = contact.cleaned_data.get("username")
        phonenumber = contact.cleaned_data.get("phonenumber")
        email = contact.cleaned_data.get("email")
        subject = contact.cleaned_data.get("subject")
        message = contact.cleaned_data.get("message")
        Messages_contact.objects.create (name = name,username = username, phonenumber = phonenumber ,email = email, subject = subject, message = message ,is_read = False)

    
    context = {
        
    }

    return render (request, 'contact.html' , context)
def save_page(request):
       
    for soureNumber in range(1, 10) :
    
        response = requests.get('https://quranenc.com/api/translation/aya/persian_ih/%s' %soureNumber)

        for ayeNumber in range(1, 15) :

            response = requests.get('https://quranenc.com/api/translation/aya/persian_ih/%s' %soureNumber + '/%s' %ayeNumber)

            if response.status_code == 200:
                
                r = response.json()["result"]
                Aya.objects.create(sura=r["sura"], ayaNumber=r["aya"], translation=r["translation"], text=r["arabic_text"],)
        
    
    context = {
        
    }

    return render (request, 'contact.html' , context)



#aya API

class AyaViewSet(viewsets.ModelViewSet):
    
    queryset = Aya.objects.all()
    serializer_class = AyaSerializer
class Comments_ayaViewSet(viewsets.ModelViewSet):
    
    queryset = Comments_aya.objects.all()
    serializer_class = Comments_ayaSerializer
class HadisViewSet(viewsets.ModelViewSet):
    
    queryset = Hadis.objects.all()
    serializer_class = HadisSerializer
class Messages_contactViewSet(viewsets.ModelViewSet):
    
    queryset = Messages_contact.objects.all()
    serializer_class = Messages_contactSerializer
class Messages_footerViewSet(viewsets.ModelViewSet):
    
    queryset = Messages_footer.objects.all()
    serializer_class = Messages_footerSerializer
class UserViewSet(viewsets.ModelViewSet):
    
    queryset = User.objects.all()
    serializer_class = UserSerializer