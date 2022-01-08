from django.db import models

# Create your models here.

def user_directory_path(instance, filename):
    return 'user_{0}/{1}'.format(instance, filename)

#main page classes 
    #header 
class Header(models.Model):
    logo = models.ImageField(
        upload_to=user_directory_path, verbose_name="لوگو")
    title = models.CharField(max_length=500, verbose_name="آیه")
    description = models.TextField(max_length=1500, verbose_name="معنی")
    text = models.CharField(max_length=50, verbose_name="نام سوره، شماره آیه")
    photo = models.ImageField(
        upload_to=user_directory_path, verbose_name="تصویر")
    title1 = models.CharField(max_length=500, verbose_name="آیه")
    description1 = models.TextField(max_length=1500, verbose_name="معنی")
    text1 = models.CharField(max_length=50, verbose_name="نام سوره، شماره آیه")

    class Meta:
        verbose_name = "صفحه اصلی-هدر"

    #body
class Aye(models.Model):
    joz = models.CharField(max_length=50, verbose_name="جز")
    aye = models.CharField(max_length=50, verbose_name="آیه")
    soure = models.CharField(max_length=50, verbose_name="سوره")
    title = models.CharField(max_length=500, verbose_name="آیه")
    description = models.TextField(max_length=1500, verbose_name="معنی")
    location = models.CharField(max_length=50, verbose_name="سوره و آیه")


class Hadis(models.Model):
    joz = models.CharField(max_length=50, verbose_name="امام")
    aye = models.CharField(max_length=50, verbose_name="موضوع")
    soure = models.CharField(max_length=50, verbose_name="سوره")
    title = models.CharField(max_length=500, verbose_name="حدیث")
    description = models.TextField(max_length=1500, verbose_name="معنی")
    location = models.CharField(max_length=50, verbose_name="کتاب و صفحه")


class About(models.Model):
    title = models.CharField(max_length=500, verbose_name="سر متن")
    description = models.TextField(max_length=1500, verbose_name="درباره ما")

    class Meta:
        verbose_name="درباره ما"

class Contact(models.Model):
    title = models.CharField(max_length=500, verbose_name="سر متن")
    description = models.TextField(max_length=1500, verbose_name="ارتباط با ما")

    class Meta:
        verbose_name="ارتباط با ما"

    #footer 

class Footer(models.Model):
    logo = models.ImageField(
        upload_to = user_directory_path, verbose_name="لوگو")

class Contact_us(models.Model):
    name = models.CharField(max_length=50, verbose_name="نام")
    number = models.IntegerField(verbose_name="شماره تلفن")
    view = models.TextField(max_length=2500, verbose_name="نظر و انتقادات")
    is_read = models.BooleanField(default=False)
    

