import { MenuItem as MenuItemtype } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItemtype;
  addToCart: () => void;
}

const MenuItem = ({menuItem, addToCart}: Props) => {
  return(
    <Card className="cursor-pointer" onClick={addToCart}>
        <CardHeader>
            <CardTitle>{menuItem.name}</CardTitle>
        </CardHeader>
        <CardContent>
            ${(menuItem.price / 100).toFixed(2)}
        </CardContent>
    </Card>
  )
}

export default MenuItem;