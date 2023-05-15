import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import SVGHome from 'shared/assets/icons/home.svg';
import SVGAbout from 'shared/assets/icons/about.svg';
import SVGProfile from 'shared/assets/icons/profile.svg';
import SVGArticles from 'shared/assets/icons/articles.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: RoutePaths.profile,
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
];
