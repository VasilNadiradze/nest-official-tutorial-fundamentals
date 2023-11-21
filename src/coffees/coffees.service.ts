import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees : Coffee[] = [
        {
            id: 1,
            name: "1 coffee",
            brand: "1 brand",
            flavors: ['shokoladi','vanili']
        },
        {
            id: 2,
            name: "2 coffee",
            brand: "2 brand",
            flavors: ['shokoladi','vanili']
        },
        {
            id: 3,
            name: "3 coffee",
            brand: "3 brand",
            flavors: ['shokoladi','vanili']
        }
    ];

    index(){
        return this.coffees;
    }

    show(id: string) {
        const coffee = this.coffees.find((item) => item.id === +id);

        if(!coffee){
            //throw new HttpException('Coffee not found', HttpStatus.NOT_FOUND);
            throw new NotFoundException('Coffee not found');
        }

        return coffee;
    }

    create(createCoffeeDto) {
        this.coffees.push(createCoffeeDto);
        return createCoffeeDto;
    }

    update(id: string, updateCoffeeDto) {
        const coffee = this.show(id);

        if(coffee){
            return id;
        }

        // update goes here
    }

    delete(id: string) {
        // deleteing goes here
    }
}