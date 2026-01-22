type ClassValue =
  | ClassArray
  | ClassObject
  | string
  | number
  | null
  | boolean
  | undefined;
type ClassObject = Record<string, any>;
type ClassArray = ClassValue[];

/**
 * Custom utility function for conditionally joining class names. Optimized for performance.
 * Better alternative to clsx/classnames without the extra dependency.
 *
 * @param args - An array of class names to join.
 * @returns A string of class names.
 */
function toVal(mix: ClassValue): string {
  let k,
    y,
    str = "";

  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object" && mix) {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if ((y = toVal(mix[k]))) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix as ClassObject) {
        if ((mix as ClassObject)[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }

  return str;
}

export function cn(...args: ClassValue[]): string {
  let i = 0,
    tmp,
    x,
    str = "";

  while (i < args.length) {
    if ((tmp = args[i++])) {
      if ((x = toVal(tmp))) {
        str && (str += " ");
        str += x;
      }
    }
  }

  return str;
}
