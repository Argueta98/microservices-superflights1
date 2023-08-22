export enum RabbitMQ {
  ControlQueue = 'controls',
}

export enum ControlMSG {
  CREATE = 'CREATE_CONTROL',
  FIND_ALL = 'FIND_CONTROLS',
  FIND_ONE = 'FIND_CONTROL',
  UPDATE = 'UPDATE_CONTROL',
  DELETE = 'DELETE_CONTROL',
}
