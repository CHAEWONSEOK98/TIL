// Generic in Type

type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = '채귤';

interface DoneState<T> {
  data: T[];
}

interface LoadingState {
  requestedAt: Date;
}

interface ErrorState {
  error: string;
}

type State<T> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
  data: ['1', '2'],
};
