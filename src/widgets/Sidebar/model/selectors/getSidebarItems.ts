import { createSelector } from '@reduxjs/toolkit';
import { SidebarItemType } from '../types/sidebar';
import { getUserAuthData, isUserAdmin, isUserManager } from '@/entities/User';
import AboutIconRedesigned from '@/shared/assets/icons/about-new.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg';
import AdminIconRedesigned from '@/shared/assets/icons/admin-new.svg';
import ArticlesIconRedesigned from '@/shared/assets/icons/articles-new.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/articles.svg';
import HomeIconRedesigned from '@/shared/assets/icons/home-new.svg';
import HomeIconDeprecated from '@/shared/assets/icons/home.svg';
import ProfileIconRedesigned from '@/shared/assets/icons/profile-new.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg';
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/consts/router';
import { toggleFeatures } from '@/shared/lib/featureFlags';

export const getSidebarItems = createSelector(
  [getUserAuthData, isUserAdmin, isUserManager],
  (userData, isUserAdmin, isUserManager) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => HomeIconRedesigned,
          off: () => HomeIconDeprecated,
        }),
        text: 'main page',
      },
      {
        path: getRouteAbout(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => AboutIconRedesigned,
          off: () => AboutIconDeprecated,
        }),
        text: 'about page',
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(userData.id),
          Icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ProfileIconRedesigned,
            off: () => ProfileIconDeprecated,
          }),
          text: 'profile page',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          Icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ArticlesIconRedesigned,
            off: () => ArticlesIconDeprecated,
          }),
          text: 'articles page',
          authOnly: true,
        },
      );

      if (isUserAdmin || isUserManager) {
        sidebarItemsList.push({
          path: getRouteAdminPanel(),
          Icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => AdminIconRedesigned,
            off: () => ProfileIconDeprecated,
          }),
          text: 'admin page',
          authOnly: true,
        });
      }
    }

    return sidebarItemsList;
  },
);
