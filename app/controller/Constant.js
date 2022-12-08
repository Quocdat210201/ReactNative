import { Dimensions } from 'react-native'

export default {
    color: {
        primary: '#BD403A',
        secondary: '#0079BF',
        while: '#ffffff',
        black: '#000000',
        gray: '#bbbbbb'
    },
    images: {
        logo: require('../assets/images/ic_logo.png'),
        facebook: require('../assets/images/ic_facebook.png'),
        zalo: require('../assets/images/ic_zalo.png'),
        apple: require('../assets/images/ic_apple.png'),
        back: require('../assets/images/ic_back.png'),
        search: require('../assets/images/ic_search.png'),
        down: require('../assets/images/ic_down.png'),
        right: require('../assets/images/ic_right_arow.png'),
        car1: require('../assets/images/car/car1.jpg'),
        car2: require('../assets/images/car/car2.jpg'),
        car3: require('../assets/images/car/car3.jpg'),
        car4: require('../assets/images/car/car4.jpg'),
        car5: require('../assets/images/car/car5.jpg'),
    },
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    fonts: {
        notoSansJPBold: 'NotoSansJP-Bold',
        notoSansJPRegular: 'NotoSansJP-Regular',
        notoSansJPMedium: 'NotoSansJP-Medium',
        notoSansJPThin: 'NotoSansJP-Thin',
        notoSansJPLight: 'NotoSansJP-Light'
    },
    nameScreen: {
        Home: 'HomeScreen',
        Login: 'LoginScreen'
    }
}
