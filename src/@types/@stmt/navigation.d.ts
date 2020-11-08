declare module '@stmt/navigation' {
  import {RouteProp} from '@react-navigation/native';
  import {StackNavigationProp} from '@react-navigation/stack';

  type StackRouteProps<
    T extends Record<string, object | undefined>,
    K extends keyof T
  > = RouteProp<T, K>;

  type StackProps<
    T extends Record<string, object | undefined>,
    K extends keyof T
  > = {
    route: RouteProp<T, K>;
    navigation: StackNavigationProp<T, K>;
  };
}
