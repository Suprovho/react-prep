
export const img = [
    "https://images.unsplash.com/photo-1524591431555-cc7876d14adf?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661353245572-5e41f6208de8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554941426-a965fb2b9258?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1620041630614-cd5d3b08cc24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1592868787763-acee4cbc7019?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  export const MIN=0;
  export const MAX=100;

  export const rawTrainsData = [
    {
      trainId: "123A",
      name: "Express Train A",
      date: "2024-09-20",
      availableSeats: 5, // Account for already booked and PWD seats
      seats: [
        { isBooked: true, isPWD: false }, // Already booked
        { isBooked: false, isPWD: false }, // Available
        { isBooked: false, isPWD: true }, // Reserved for PWD
        { isBooked: true, isPWD: false }, // Already booked
        { isBooked: false, isPWD: false }, // Available
        { isBooked: false, isPWD: false }, // Available
        { isBooked: false, isPWD: true }, // Reserved for PWD
        { isBooked: false, isPWD: false }, // Available
        { isBooked: false, isPWD: false }, // Available
        { isBooked: false, isPWD: true }, // Reserved for PWD
      ],
    },
    {
      trainId: "124B",
      name: "Express Train B",
      date: "2024-09-20",
      availableSeats: 3, // Account for already booked and PWD seats
      seats: [
        { isBooked: false, isPWD: false }, // Available
        { isBooked: true, isPWD: false }, // Already booked
        { isBooked: false, isPWD: true }, // Reserved for PWD
        { isBooked: false, isPWD: false }, // Available
        { isBooked: false, isPWD: false }, // Available
      ],
    },
    {
      trainId: "125C",
      name: "Express Train C",
      date: "2024-09-21",
      availableSeats: 4, // Account for already booked and PWD seats
      seats: [
        { isBooked: false, isPWD: false }, // Available
        { isBooked: false, isPWD: false }, // Available
        { isBooked: false, isPWD: true }, // Reserved for PWD
        { isBooked: true, isPWD: false }, // Already booked
        { isBooked: false, isPWD: false }, // Available
        { isBooked: false, isPWD: true }, // Reserved for PWD
        { isBooked: false, isPWD: false }, // Available
        { isBooked: true, isPWD: false }, // Already booked
      ],
    },
  ];
  
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
       return false;
      }
    }
    return true;
   }
  
   //Function to find the nth prime number
  export const prime = function findNthPrime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
       count++;
      }
      num++;
    }
    return num - 1;
   }

   