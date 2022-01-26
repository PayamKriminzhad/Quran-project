from django.db import models
import django.utils


def user_directory_path(instance, filename):
    return 'user_{0}/{1}'.format(instance, filename)

#main page classes 
    #header 
    
    

class Settings_main(models.Model):

    header_logo = models.ImageField(
        upload_to='header-logo/', verbose_name="لوگو")
    header_title = models.CharField(max_length=500, verbose_name="آیه")
    header_description = models.TextField(max_length=1500, verbose_name="معنی")
    header_text = models.CharField(max_length=50, verbose_name="نام سوره، شماره آیه")
    header_photo = models.ImageField(
        upload_to='header_photo', verbose_name="تصویر")
    header_title1 = models.CharField(max_length=500, verbose_name="آیه")
    header_description1 = models.TextField(max_length=1500, verbose_name="معنی")
    header_text1 = models.CharField(max_length=50, verbose_name="نام سوره، شماره آیه")


    about_title = models.CharField(max_length=500, verbose_name="سر متن")
    about_description = models.TextField(max_length=1500, verbose_name="درباره ما")

    
    donateCard_bankName = models.CharField(max_length=50, verbose_name="اسم بانک")
    donateCard_cardNumber = models.IntegerField(verbose_name="شماره کارت")
    donateCard_ownerName = models.CharField(max_length=50, verbose_name='نام')

    
    contact_title = models.CharField(max_length=500, verbose_name="سر متن")
    contact_description = models.TextField(max_length=1500, verbose_name="ارتباط با ما")

    
    footer_logo = models.ImageField(
        upload_to = user_directory_path, verbose_name="لوگو"
    )

    
    
    class Meta:
        verbose_name = "اصلی"

    #body
class Aya(models.Model):
    # main page
    joz = models.CharField(max_length=50, verbose_name="جز")
    sura = models.CharField(max_length=50, verbose_name="سوره")
    ayaNumber = models.CharField(max_length=50, verbose_name="آیه")
    text = models.TextField(max_length=1500, verbose_name="متن")
    translation = models.TextField(max_length=1500, verbose_name="ترجمه")
    language1 = models.TextField(max_length=1500, verbose_name="ترجمه", null=True)
    language2 = models.TextField(max_length=1500, verbose_name="ترجمه", null=True)
    language3 = models.TextField(max_length=1500, verbose_name="ترجمه", null=True)
    language4 = models.TextField(max_length=1500, verbose_name="ترجمه", null=True)
    location = models.CharField(max_length=50, verbose_name="مکان نزول", null=True)
    # detail page
    tafsir = models.TextField(max_length=1500, verbose_name="تفسیر", null=True)
    relatedAya = models.CharField(max_length=150, verbose_name="آیات مرتبط", null=True)
    count = models.IntegerField(default=0)
    class Meta:
        verbose_name = "آیه ها"

class Comments_aya(models.Model):
    aya = models.ForeignKey(Aya, on_delete=models.CASCADE, null=True)
    sender = models.CharField(max_length=50, verbose_name="فرستنده")
    text = models.CharField(max_length=50, verbose_name="نظر")
    date = models.DateField(default=django.utils.timezone.now)
    likeno = models.IntegerField(default=0)

class Hadis(models.Model):
    imam = models.CharField(max_length=50, verbose_name="امام")
    text = models.TextField(max_length=1500, verbose_name="متن")
    book = models.CharField(max_length=50, verbose_name="کتاب")
    pageNumber = models.CharField(max_length=50, verbose_name="صفحه")
    
    class Meta:
        verbose_name = "حدیث ها"



# contact page classes
class Messages_contact(models.Model):
    name = models.CharField(max_length=50, verbose_name = 'نام')
    username = models.CharField(max_length=50, verbose_name= 'نام کاربری')
    phonenumber = models.IntegerField(verbose_name='شماره موبایل')
    email = models.CharField(max_length=150, verbose_name='پست الکترونیک')
    subject = models.CharField(max_length=50, verbose_name='موضوع')
    message = models.CharField(max_length=5000, verbose_name='پیغام')
    class Meta:
        verbose_name = "پیام ها_ارتباط"



#footer 


class Messages_footer(models.Model):
    name = models.CharField(max_length=50, verbose_name="نام")
    number = models.IntegerField(verbose_name="شماره تلفن")
    suggestion = models.TextField(max_length=2500, verbose_name="نظر و انتقادات")
    is_read = models.BooleanField(default=False)
    class Meta:
        verbose_name = "پیام ها_پاورقی"

