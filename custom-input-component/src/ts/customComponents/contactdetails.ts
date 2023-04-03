
import Composite = require("ojs/ojcomposite");
import Validator = require('@oracle/oraclejet/dist/types/ojvalidator');

export default class ContactDetailsViewModel implements Composite.ViewModel<Composite.PropertiesType> {
  email: ko.Observable<string>;
  phoneNumber: ko.Observable<string>;
  
  emailValidator: Validator<string>;
  phoneValidator: Validator<string>;

  constructor(context: Composite.ViewModelContext<Composite.PropertiesType>) {
    this.email = context.properties["email"];
    this.phoneNumber = context.properties["phoneNumber"];

    const emailRegExp: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegExp: RegExp = /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/;


    this.emailValidator = {
        validate: (value: string) => {
            if (value && !emailRegExp.test(value)) {
            throw new Error('Please enter a valid email id');
          }
        }
    };

    this.phoneValidator = {
        validate: (value: string) => {
            if (value && !phoneRegExp.test(value)) {
            throw new Error('Please enter a valid phone number');
          }
        }
    };

  }

  //Lifecycle methods - implement if necessary 

  activated(context: Composite.ViewModelContext<Composite.PropertiesType>): Promise<any> | void {

  };

  connected(context: Composite.ViewModelContext<Composite.PropertiesType>): void {
  };

  bindingsApplied(context: Composite.ViewModelContext<Composite.PropertiesType>): void {
    
  };

  propertyChanged(context: Composite.PropertyChangedContext<Composite.PropertiesType>): void {
    
  };
}
