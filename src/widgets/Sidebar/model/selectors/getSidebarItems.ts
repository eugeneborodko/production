import { createSelector } from '@reduxjs/toolkit';
import { SidebarItemType } from '../types/sidebar';
import { getUserAuthData, isUserAdmin, isUserManager } from '@/entities/User';
import AboutIconRedesigned from '@/shared/assets/icons/about-new.svg';
import AdminIconRedesigned from '@/shared/assets/icons/admin-new.svg';
import ArticlesIconRedesigned from '@/shared/assets/icons/articles-new.svg';
import HomeIconRedesigned from '@/shared/assets/icons/home-new.svg';
import ProfileIconRedesigned from '@/shared/assets/icons/profile-new.svg';
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/consts/router';

export const getSidebarItems = createSelector(
  [getUserAuthData, isUserAdmin, isUserManager],
  (userData, isUserAdmin, isUserManager) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: HomeIconRedesigned,
        text: 'main page',
      },
      {
        path: getRouteAbout(),
        Icon: AboutIconRedesigned,
        text: 'about page',
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(userData.id),
          Icon: ProfileIconRedesigned,
          text: 'profile page',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          Icon: ArticlesIconRedesigned,
          text: 'articles page',
          authOnly: true,
        },
      );

      if (isUserAdmin || isUserManager) {
        sidebarItemsList.push({
          path: getRouteAdminPanel(),
          Icon: AdminIconRedesigned,
          text: 'admin page',
          authOnly: true,
        });
      }
    }

    return sidebarItemsList;
  },
);
