//******************** tuples *************************************************************************************************************************

// red , grenn, blue
const rgbColor: [number, number, number] = [255, 137, 45];

// red , grenn, blue
const rgbColor2: [number, number, number] = [255, 137, 45, 23];

// red , grenn, blue
const rgbColor3: [number, number, number] = [255, 137, 45, '23'];

type httpResponse = [number, string];

const response: httpResponse = [200, 'OK'];

const response: httpResponse = ['200', 'OK'];

const response: httpResponse = [200, 'OK', 22];

const res: httpResponse[] = [
  [200, 'OK'],
  [400, 'Not Found'],
  [500, 'sever eorr'],
];

// tuples issue
response.push(45);
response.push('ff');

response.pop();
response.pop();

// *************************** Enums   *****************************************************************************************

enum OrderStatus {
  PENDING,
  SHIPING,
  DELIVERD,
  RETURNED,
}

const Mystatus = OrderStatus.RETURNED;

const isDeliverd = (status: OrderStatus) => status === OrderStatus.DELIVERD;

isDeliverd(Mystatus);

isDeliverd('SHIPING');

enum ArrowKeys {
  UP,
  DOWN,
  LEFT,
  RIGTH,
}

enum ArrowKeys2 {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGTH = 'rigth',
}

enum OrderStatus2 {
  PENDING = 100,
  SHIPING,
  DELIVERD,
  RETURNED,
}

enum OrderStatus3 {
  PENDING = 100,
  SHIPING = 34,
  DELIVERD = 45,
  RETURNED = 0,
}

const enum OrderStatus4 {
  PENDING,
  SHIPING,
  DELIVERD,
  RETURNED,
}
