import { Type } from 'class-transformer'
import { IsAlpha, IsDate, IsEmpty, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MinDate } from 'class-validator'


export class CreateCotizacioneDto {

    @IsString()
    @IsNotEmpty()
    @IsAlpha()
    name: string

    @IsString()
    @IsNotEmpty()
    @IsAlpha()
    destination: string

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    @MinDate(() => new Date())
    departureDate: Date

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    @MinDate(() => new Date())
    arrivalDate: Date

    @IsInt()
    @IsNotEmpty()
    @IsPositive()
    passengers: number

    @IsInt()
    @IsNotEmpty()
    @IsPositive()
    totalValue: number

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    @IsPositive()
    advisor?: number

}
