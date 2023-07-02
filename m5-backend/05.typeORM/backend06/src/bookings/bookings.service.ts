import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './bookings.model';

@Injectable()
export class BookingsService {
    constructor(
        @InjectRepository(Booking)
        private bookingRepo: Repository<Booking>
    ) {}

    async create(booking: Booking): Promise<Booking> {
        try {
            return await this.bookingRepo.save(booking);
        } catch (error) {
            console.log(error.message);
            throw new ConflictException('Cant save');
        }
    }

    findAllByUserId(userId: number): Promise<Booking[]> {
        return this.bookingRepo.find({
            relations: {
                user: true,
                book: true
            },
            where: {
                user: {
                    id: userId
                }
            }
        });

    }



}