import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CotizacionesStatus } from "../enum/cotizaciones-status.enum.js";

@Entity('cotizaciones')
export class Cotizaciones {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 200 })
    name: string

    @Column("varchar", { length: 200 })
    destination: string

    @Column()
    departureDate: Date

    @Column()
    arrivalDate: Date

    @Column("int")
    passengers: number

    @Column("int")
    totalValue: number

    @Column("int")
    advisor: number

    @Column({
        type: "enum",
        enum: CotizacionesStatus,
        default: CotizacionesStatus.BORRADOR
    })
    status: CotizacionesStatus

    @Column("varchar", { length: 200})
    rejectionReason: string

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date
}
