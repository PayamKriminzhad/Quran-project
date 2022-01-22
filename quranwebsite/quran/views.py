from django.shortcuts import render, HttpResponse, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, get_user_model
from .models import Hadis, Settings_main, Messages_contact, Aya, Contact_footer
from .filters import AyaFilter
from .forms import Form_register, Form_footer, Form_contact
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.db.models import F
import requests


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
            
            firstName = form.cleaned_data.get('firstName')
            lastName = form.cleaned_data.get('lastName')
            userName = form.cleaned_data.get('userName')
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password')

            newUser = User.objects.create_user(username=userName, email=email, password=password, first_name=firstName, last_name=lastName)
            print(newUser)

        
    else:
        form = Form_register()
    return render(request, 'register.html', {'form': form})


#login page
def login_page(request):
    if request.method == 'POST':
        username, email = request.POST('نام کاربری یا پست الکترونیکی ')
        password = request.POST['رمز عبور']

        user = authenticate(username=username, email=email, password=password)

        if user is not None:
            login(request, user)
            return render(request, 'login.html', )

        else: 
            messages.error(request, "نام کاربری یا رمز عبور اشتباه می باشد")

    return render(request,'login.html')



#main page

def main_page(request):


    header = Settings_main.objects.all()
    hadis = Hadis.objects.all()
    

    # footer suggestions
    contact_us = Form_footer(request.POST or None)

    if contact_us.is_valid():
        name = contact_us.cleaned_data.get("name")
        number = contact_us.cleaned_data.get("number")
        suggestion = contact_us.cleaned_data.get("suggustion")
        Contact_footer.objects.create(name = name,number = number ,suggestion = suggestion,is_read = False)
    



    aya = Aya.objects.all()
    ayaFilter = AyaFilter(request.GET, queryset = aya)
    

    
    
    context = {
        'header' : header,
        'aya' : aya,
        'hadis' : hadis,
        'ayaFilter': ayaFilter,
    }

    return render (request, 'i.html' , context)


#details page 

def details_page(request, ayaid, *args, **kwargs):


    aya = Aya.objects.get(id=ayaid)
    
    get_object_or_404(Aya, id=ayaid)
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

