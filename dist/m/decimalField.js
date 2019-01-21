var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseValueFieldMetadataProperties, BaseValueFieldStateProperties, BaseValueField } from "./baseValueField";
import { observable } from "mobx";
const DecimalFieldMetadataProperties = [...BaseValueFieldMetadataProperties,
    "minValue",
    "maxValue",
    "minDecimals",
    "maxDecimals",
];
const DecimalFieldStateProperties = [...DecimalFieldMetadataProperties, ...BaseValueFieldStateProperties];
export class DecimalField extends BaseValueField {
    constructor() {
        super(...arguments);
        this.state = {
            label: null,
            shortLabel: null,
            messages: [],
            hidden: false,
            disabled: false,
            minValue: null,
            maxValue: null,
            minDecimals: 2,
            maxDecimals: 2,
            required: false,
            value: null,
            originalValue: null
        };
    }
    setMinValue(minValue) {
        if (minValue !== this.state.minValue) {
            this.state = Object.assign({}, this.state, { minValue });
        }
    }
    setMaxValue(maxValue) {
        if (maxValue !== this.state.maxValue) {
            this.state = Object.assign({}, this.state, { maxValue });
        }
    }
    setMinDecimals(minDecimals) {
        if (minDecimals !== this.state.minDecimals) {
            this.state = Object.assign({}, this.state, { minDecimals });
        }
    }
    setMaxDecimals(maxDecimals) {
        if (maxDecimals !== this.state.maxDecimals) {
            this.state = Object.assign({}, this.state, { maxDecimals });
        }
    }
    applyMetadata(metadata) {
        let newState;
        DecimalFieldMetadataProperties.forEach((property) => {
            if (property in metadata && this.state[property] !== metadata[property]) {
                if (!newState) {
                    newState = Object.assign({}, this.state);
                }
                newState[property] = metadata[property];
            }
        });
        if (newState) {
            this.state = newState;
        }
    }
    applySnapshot(snapshot) {
        let newState;
        DecimalFieldStateProperties.forEach((property) => {
            if (property in snapshot && this.state[property] !== snapshot[property]) {
                if (!newState) {
                    newState = Object.assign({}, this.state);
                }
                newState[property] = snapshot[property];
            }
        });
        if (newState) {
            this.state = newState;
        }
    }
}
__decorate([
    observable.ref
], DecimalField.prototype, "state", void 0);