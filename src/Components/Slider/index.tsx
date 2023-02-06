import { VStack, HStack, Input } from 'native-base';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    FlatList,
    Image,
    TouchableOpacity,
    Animated,
} from 'react-native';
import { SCREEN_WIDTH } from '../../Constants/constants';
import styles from './styles';


const Slide = ({ item }: any) => {
    return (
        <Image source={{ uri: item }} style={styles.image} />
    );
};

interface SlidesProps {
    slides: string[]
}

const Slides = ({ slides }: SlidesProps) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const animatedValue = useRef(new Animated.Value(0)).current;
    const silderRef: any = useRef(null);

    const vieableItemChanged: any = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const keyExtractor = (_: any, index: any) => index.toString();

    const PagingDot: FunctionComponent<{ color: any; opacity: any }> = ({
        color,
        opacity,
    }) => {
        return (
            <Animated.View
                style={[styles.indicator, { backgroundColor: color, opacity: opacity }]}
            />
        );
    };

    const Footer = () => {
        return (
            <VStack>
                <HStack flex={1} justifyContent='center' alignItems='center'>
                    {slides.map((_: any, index: any) => {
                        const inputRange = [
                            (index - 1) * SCREEN_WIDTH - 125,
                            index * SCREEN_WIDTH - 125,
                            (index + 1) * SCREEN_WIDTH - 125,
                        ];

                        const colorOutputRange = [
                            '#ccc',
                            '#000',
                            '#ccc',
                        ];

                        const color = animatedValue.interpolate({
                            inputRange,
                            outputRange: colorOutputRange,
                            extrapolate: 'clamp',
                        });
                        const opacity = animatedValue.interpolate({
                            inputRange,
                            outputRange: [0.7, 1, 0.7],
                            extrapolate: 'clamp',
                        });
                        return (
                            <PagingDot
                                color={color}
                                opacity={opacity}
                                key={index.toString()}
                            />
                        );
                    })}
                </HStack>
            </VStack>
        );
    };

    return (
        <VStack >
            <Animated.FlatList
                data={slides}
                horizontal
                pagingEnabled
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Slide item={item} />}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: animatedValue } } }],
                    { useNativeDriver: false },
                )}
                snapToAlignment='start'
                scrollEventThrottle={16}
                decelerationRate='fast'
                bounces={false}
                snapToOffsets={[...Array(slides.length)].map(
                    (x, i) => i * (SCREEN_WIDTH * 0.8 - 40) + (i - 1) * 40
                )}
                //onViewableItemsChanged={vieableItemChanged}
                viewabilityConfig={viewConfig}
                ref={silderRef}
            />
            {/* <Footer /> */}
        </VStack>
    );
};

export default Slides;