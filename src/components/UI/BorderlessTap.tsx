import React from "react";
import { State, TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  add,
  and,
  call,
  clockRunning,
  cond,
  eq,
  greaterThan,
  neq,
  not,
  set,
  startClock,
  stopClock,
  useCode,
} from "react-native-reanimated";
import {
  useClock,
  useTapGestureHandler,
  useValue,
} from "react-native-redash/lib/module/v1";

interface BorderlessTapProps {
  children: React.ReactNode;
  onPress: () => void;
}

const BorderlessTap: React.FC<BorderlessTapProps> = ({ children, onPress }) => {
  const clock = useClock();
  const start = useValue(0);
  const { gestureHandler, state } = useTapGestureHandler();

  const opacity = useValue(0);
  useCode(
    () => [
      cond(and(eq(state, State.BEGAN), not(clockRunning(clock))), [
        startClock(clock),
        set(start, clock),
      ]),
      cond(neq(state, State.BEGAN), [stopClock(clock)]),
      cond(eq(state, State.END), [call([], onPress)]),
      set(
        opacity,
        cond(
          and(greaterThan(clock, add(start, 100)), clockRunning(clock)),
          0.5,
          1
        )
      ),
    ],
    []
  );

  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View style={{ opacity }}>{children}</Animated.View>
    </TapGestureHandler>
  );
};

export default BorderlessTap;
