export class SagaError<T extends (...args: any) => any> extends Error {
  action?: (...args: Parameters<T>) => ReturnType<T>;

  constructor(
    message: string,
    action?: (...args: Parameters<T>) => ReturnType<T>
  ) {
    super(message);
    if (action) {
      this.action = action;
    }

    return this;
  }
}

export interface APIServerError {
  message: string;
  error: string;
}

export class DynamoError {
  static isNotFound(e: any) {
    return e.error === 'dynamo: no item found';
  }
}
