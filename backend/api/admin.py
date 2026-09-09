from django.contrib import admin
from .models import Publication, DecidedCase, AdvisoryOpinion, Event, Training


@admin.register(Publication)
class PublicationAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'published_at')


@admin.register(DecidedCase)
class DecidedCaseAdmin(admin.ModelAdmin):
    list_display = ('title', 'case_date')


@admin.register(AdvisoryOpinion)
class AdvisoryOpinionAdmin(admin.ModelAdmin):
    list_display = ('title', 'issued_at')


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'published_at', 'start_date', 'end_date')


@admin.register(Training)
class TrainingAdmin(admin.ModelAdmin):
    list_display = ('title', 'category')
