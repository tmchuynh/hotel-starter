import { formatCreditCardNumber } from "./format";
import { getCardType } from "./getInfo";
import { validateField } from "./validation";

export function handleFormSubmit<T>(
  formData: T,
  requiredFields: Array<keyof T>,
  validateField: (name: string, value: string, additionalData?: any) => string,
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>,
  setTouched: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
  onSubmit: (data: T) => void,
  additionalData?: any
): boolean {
  const formErrors: Record<string, string> = {};
  let isValid = true;

  // Validate required fields
  requiredFields.forEach((field) => {
    const error = validateField(
      field as string,
      formData[field] as string,
      additionalData
    );
    if (error) {
      formErrors[field as string] = error;
      isValid = false;
    }
  });

  setErrors(formErrors);

  // Mark all required fields as touched
  const touchedFields: Record<string, boolean> = {};
  requiredFields.forEach((field) => {
    touchedFields[field as string] = true;
  });
  setTouched(touchedFields);

  if (isValid) {
    onSubmit(formData);
  }

  return isValid;
}

export function handleSelectChange<T extends Record<string, any>>(
  name: string,
  value: string,
  setFormData: React.Dispatch<React.SetStateAction<T>>,
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>,
  setTouched: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
): void {
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  const error = validateField(name, value);
  setErrors((prev) => ({ ...prev, [name]: error }));
  setTouched((prev) => ({ ...prev, [name]: true }));
}

export function handleInputChange<T extends Record<string, any>>(
  e: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<T>>,
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>,
  setCardType?: React.Dispatch<React.SetStateAction<string>>,
  additionalData?: { [key: string]: any }
): void {
  const { name, value, type, checked } = e.target;

  if (name === "cardNumber" && setCardType) {
    const formattedValue = formatCreditCardNumber(value);
    const detectedType = getCardType(formattedValue);
    setCardType(detectedType || "");

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));

    const error = validateField(name, formattedValue, {
      cardType: detectedType,
    });
    setErrors((prev) => ({ ...prev, [name]: error }));
  } else {
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (type !== "checkbox") {
      const error = validateField(name, value, additionalData);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  }
}
export function handleApplyDiscountUtil(
  discountCode: string,
  applyDiscount: (code: string) => boolean
): { discountApplied: boolean; discountError: boolean } {
  if (!discountCode.trim()) {
    return { discountApplied: false, discountError: true };
  }

  const isValidDiscount = applyDiscount(discountCode);

  return {
    discountApplied: isValidDiscount,
    discountError: !isValidDiscount,
  };
}

export const handleBlur = (
  e: React.FocusEvent<HTMLInputElement>,
  setTouched: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
) => {
  const { name } = e.target;
  setTouched((prev) => ({ ...prev, [name]: true }));
};
