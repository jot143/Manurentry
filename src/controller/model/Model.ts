export class Model {
  className = 'Empty';

  set(data: any, saveLocal = false) {
    for (const d in data) {
      const e: any = this;
      if (e[d] && e[d]?.className) {
        import(`./${e[d]?.className}`).then(m => {
          const childObj = new m[e[d].className]();
          childObj.set(data[d]);
          e[d] = childObj;
        });
      } else if (Array.isArray(e[d])) {
        const prototype = Object.getPrototypeOf(e);
        if(prototype && prototype._array_variable_type && prototype._array_variable_type[d]) {
          import(`./${prototype._array_variable_type[d]}`).then(m => {
            const childObjs = m[prototype._array_variable_type[d]].createFromArray(data[d]);
            e[d] = childObjs;
          });
        } else {
          console.warn(`Class "${e.className}" parameter "${d}" is array, but its decorated is not define`);
          e[d] = data[d];
        }
      }
      else {
        e[d] = data[d];
      }
    }

    if (saveLocal) {
      this.saveLocal();
    }
  }

  get(key: string) {
    try {
      const e: any = this;
      return e[key];
    } catch {
      return null;
    }
  }

  noCirculars(v: any) {
    const set = new Set();
    const noCirculars: any = (v: any) => {
      if (Array.isArray(noCirculars)) {
        return v.map(noCirculars);
      }
      if (typeof v === 'object' && v !== null) {
        if (set.has(v)) {
          return undefined;
        }
        set.add(v);

        return Object.entries(
          Object.entries(v).map(([k, v]) => [k, noCirculars(v)])
        );
      }
      return v;
    };
    return noCirculars(v);
  }

  stringify(circObj: Object) {
    const replacerFunc = () => {
      const visited = new WeakSet();
      return (key: any, value: any) => {
        if (typeof value === 'object' && value !== null) {
          if (visited.has(value)) {
            return;
          }
          visited.add(value);
        }
        return value;
      };
    };

    return JSON.stringify(circObj, replacerFunc());
  }

  saveLocal() {
    const data = this.stringify(this);
    localStorage.setItem(this.className, data);
  }

  loadFromLocal() {
    const data: any = localStorage.getItem(this.className);
    try {
      this.set(JSON.parse(data));
    } catch {
      //
    }
  }

  static getClassName() {
    const className = this.toString()
      .split('(' || /s+/)[0]
      .split(' ' || /s+/)[1];
    return className;
  }

  static createFromArray(datas: Array<any> = []): any {
    const objs = [];
    for (const data of datas) {
      const obj = new this();
      obj.set(data);
      objs.push(obj);
    }
    return objs;
  }

  static create(data: any): any {
    const obj = new this();
    obj.set(data);
    return obj;
  }
}
