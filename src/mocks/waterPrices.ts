import { PriceValue } from "@/Forms/CotizacionForm/CotizacionForm";

const filtracion: PriceValue[] = [];
for (let index = 0; index < 20; index++) {
  const newElement = {
    id: index,
    flow: 5 + index,
    unit: "m3/d",
    price: 13000 + index * 1000,
    currency: "USD",
  };

  filtracion.push(newElement);
}

const suavisador: PriceValue[] = [];
for (let index = 0; index < 20; index++) {
  const newElement = {
    id: index,
    flow: 5 + index,
    unit: "m3/d",
    price: 8000 + index * 1000,
    currency: "USD",
  };

  suavisador.push(newElement);
}

const osmosis: PriceValue[] = [];
for (let index = 0; index < 20; index++) {
  const newElement = {
    id: index,
    flow: 5 + index,
    unit: "m3/d",
    price: 8000 + index * 1000,
    currency: "USD",
  };
  osmosis.push(newElement);
}

const pretratamiento: PriceValue[] = [];
for (let index = 0; index < 20; index++) {
  const newElement = {
    id: index,
    flow: 5 + index,
    unit: "m3/d",
    price: 8000 + index * 1000,
    currency: "USD",
  };
  pretratamiento.push(newElement);
}

const lodosActivados: PriceValue[] = [];
for (let index = 0; index < 20; index++) {
  const newElement = {
    id: index,
    flow: 5 + index,
    unit: "m3/d",
    price: 8000 + index * 1000,
    currency: "USD",
  };
  lodosActivados.push(newElement);
}

const bioFiltracion: PriceValue[] = [];
for (let index = 0; index < 20; index++) {
  const newElement = {
    id: index,
    flow: 5 + index,
    unit: "m3/d",
    price: 8000 + index * 1150,
    currency: "USD",
  };
  bioFiltracion.push(newElement);
}

const mbbr: PriceValue[] = [];
for (let index = 0; index < 20; index++) {
  const newElement = {
    id: index,
    flow: 5 + index,
    unit: "m3/d",
    price: 8000 + index * 900,
    currency: "USD",
  };
  mbbr.push(newElement);
}

const osmosisReuso: PriceValue[] = [];
for (let index = 0; index < 20; index++) {
  const newElement = {
    id: index,
    flow: 5 + index,
    unit: "m3/d",
    price: 1200 + index * 800,
    currency: "USD",
  };
  osmosisReuso.push(newElement);
}

const ultrafiltracion: PriceValue[] = [];
for (let index = 0; index < 20; index++) {
  const newElement = {
    id: index,
    flow: 5 + index,
    unit: "m3/d",
    price: 1000 + index * 1000,
    currency: "USD",
  };
  ultrafiltracion.push(newElement);
}

export const priceList: any = {
  osmosis,
  suavisador,
  filtracion,
  pretratamiento,
  lodosActivados,
  bioFiltracion,
  mbbr,
  osmosisReuso,
  ultrafiltracion
};
