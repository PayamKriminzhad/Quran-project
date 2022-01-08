from django.contrib import admin
from .models import Header, About, Contact, Footer, Contact_us, Aye, Hadis

# Register your models here.
# Admin classes
class HeaderAdmin(admin.ModelAdmin):
    list_display = ['title']

class AyeAdmin(admin.ModelAdmin):
    list_display = ['title']

class HadisAdmin(admin.ModelAdmin):
    list_display = ['title']

class AboutAdmin(admin.ModelAdmin):
    list_display = ['title']

class ContactAdmin(admin.ModelAdmin):
    list_display = ['title']

class FooterAdmin(admin.ModelAdmin):
    list_display = ['logo']

class Contact_usAdmin(admin.ModelAdmin):
    list_display = ['name']

admin.site.register(Header, HeaderAdmin)
admin.site.register(Aye, AyeAdmin)
admin.site.register(Hadis, HadisAdmin)
admin.site.register(About, AboutAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(Footer, FooterAdmin)
admin.site.register(Contact_us, Contact_usAdmin)

