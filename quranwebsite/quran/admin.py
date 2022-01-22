from django.contrib import admin
from .models import Settings_main, Messages_contact, Aya, Hadis, Contact_footer



# Admin classes
class Settings_mainAdmin(admin.ModelAdmin):
    list_display = ['header_title']

class AyaAdmin(admin.ModelAdmin):
    list_display = ['text']

class HadisAdmin(admin.ModelAdmin):
    list_display = ['imam']



class Messages_contactAdmin(admin.ModelAdmin):
    list_display = ['name']


class Contact_footerAdmin(admin.ModelAdmin):
    list_display = ['name']


admin.site.register(Settings_main, Settings_mainAdmin)
admin.site.register(Aya, AyaAdmin)
admin.site.register(Hadis, HadisAdmin)
admin.site.register(Messages_contact, Messages_contactAdmin)
admin.site.register(Contact_footer, Contact_footerAdmin )

