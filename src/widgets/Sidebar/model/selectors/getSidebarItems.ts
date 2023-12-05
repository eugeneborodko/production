import { createSelector } from '@reduxjs/toolkit';
import { SidebarItemType } from '../types/sidebar';
import { getUserAuthData, isUserAdmin, isUserManager } from '@/entities/User';
import SVGAbout from '@/shared/assets/icons/about.svg';
import SVGArticles from '@/shared/assets/icons/articles.svg';
import SVGHome from '@/shared/assets/icons/home.svg';
import SVGProfile from '@/shared/assets/icons/profile.svg';
import { RoutePaths } from '@/shared/consts/router';

export const getSidebarItems = createSelector(
  [getUserAuthData, isUserAdmin, isUserManager],
  (userData, isUserAdmin, isUserManager) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePaths.main,
        Icon: SVGHome,
        text: 'main page',
      },
      {
        path: RoutePaths.about,
        Icon: SVGAbout,
        text: 'about page',
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePaths.profile + userData.id,
          Icon: SVGProfile,
          text: 'profile page',
          authOnly: true,
        },
        {
          path: RoutePaths.articles,
          Icon: SVGArticles,
          text: 'articles page',
          authOnly: true,
        },
      );

      if (isUserAdmin || isUserManager) {
        sidebarItemsList.push({
          path: RoutePaths.admin_panel,
          Icon: SVGArticles,
          text: 'admin page',
          authOnly: true,
        });
      }
    }

    return sidebarItemsList;
  },
);
