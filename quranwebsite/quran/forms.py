from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User



#register page form
 
class Form_register(forms.Form):

    userName = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'username'}))
    firstName = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'firstname'}))
    lastName=forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'lastname'}))
    email=forms.EmailField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'email'}))
    password=forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'password'}))
    passwordConfirm=forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'passwordConfirm'}))

    
    def clean(self):
        data = self.cleaned_data()
        password = self.cleaned_data().get('password')
        passwordConfirm = self.cleaned_data().get('passwordConfirm')
        if password != passwordConfirm :
            raise forms.ValidationError('رمز ها یکسان نیستند')
        return data


#footer contact form

class Form_footer(forms.Form):
    name = forms.CharField(max_length=20, widget=forms.TextInput(
        attrs={
        'class':'form-control',
        'placeholder':'نام',
        }
    ))
    number = forms.CharField(max_length=20, widget=forms.TextInput(
        attrs={
        'class':'form-control',
        'placeholder':'شماره تلفن',
        }
    ))
    suggestion = forms.CharField(max_length=1000, widget=forms.TextInput(
        attrs={
        'class':'form-control',
        'placeholder':' نظر و انتقادات',
        }
    ))


# contact page form

class Form_contact(forms.Form):
    name = forms.CharField(max_length=20, widget=forms.TextInput(
        attrs={
        'class':'form-control',
        'placeholder':'نام',
        }
    ))
   
    username = forms.CharField(max_length=50, widget=forms.TextInput(
        attrs={
            'class': 'form-control',
            'placeholder' : 'نام کاربری',
        }
    ))

    phonenumber = forms.CharField(max_length=11, widget=forms.TextInput(
        attrs = {
            'class' : 'form-control',
            'placeholder' : 'شماره موبایل',
        }
    ))

    email = forms.CharField(max_length=150, widget=forms.TextInput(
        attrs = {
            'class' : 'form-control',
            'placeholder' : 'پست الکترونیک'
        }
    ))
  
    subject = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs = {
            'class' : 'form-control',
            'placeholder' : ' موضوع'
        }
    ))

    message = forms.CharField(max_length=5000, widget= forms.TextInput(
        attrs = {
            'class' : 'form-control',
            'placeholder' : 'پیغام'
        }
    ))

