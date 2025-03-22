function LogMethod(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(`Method Name: ${methodName}`);
    return descriptor;
  }
  
  class User1 {
    @LogMethod
    sayHello() {
      console.log("Hello, World!");
    }
  }
  
  const user = new User1();
  user.sayHello();
  