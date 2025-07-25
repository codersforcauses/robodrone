# server/api/admin.py

from django.contrib import admin
from .models import Match, Team, MatchResult
import nested_admin


class MatchResultInline(nested_admin.NestedTabularInline):
    model = MatchResult
    extra = 4  # 4 match results by default
    max_num = 5
    readonly_fields = ('honor_point', 'point')
    list_filter = ('match', 'team')
    search_fields = ('match__match_name', 'team__team_name')

    def _get_honor_point(self, p1_position, p2_position):
        if p1_position != 1:
            return 0
        return 1 + (4-p2_position)

    def save_model(self, request, obj, form, change):
        if change:  # This indicates an update operation
            # Perform specific actions for updates
            obj.point = obj.white_pins * 2 + obj.penalty_pins * -3 + obj.yellow_cards * -3 + obj.red_cards * -10
            obj.honor_point = self._get_honor_point(obj.p1_position, obj.p2_position)
        else:  # This indicates a creation operation
            # Perform specific actions for creations
            obj.point = obj.white_pins * 2 + obj.penalty_pins * -3 + obj.yellow_cards * -3 + obj.red_cards * -10
            obj.honor_point = self._get_honor_point(obj.p1_position, obj.p2_position)

        super().save_model(request, obj, form, change)  # Call the parent's save_model


class MatchAdmin(nested_admin.NestedModelAdmin):
    inlines = [MatchResultInline]


admin.site.register(Match, MatchAdmin)


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('team_name', 'created_at')
    search_fields = ('team_name',)
    list_filter = ('created_at',)
