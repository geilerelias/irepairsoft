<?php

namespace Domain\Shared\ViewModels;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Str;
use ReflectionMethod;

class ViewModel implements Arrayable
{

    /**
     * @inheritDoc
     */
    public function toArray()
    {
        return collect((new \ReflectionClass ($this))->getMethods())
            ->reject(fn(ReflectionMethod $method) => in_array($method->getName(), ['_construct', 'toArray']))
            ->filter(fn(ReflectionMethod $method) => in_array('public', \Reflection:: getModifierNames($method->getModifiers())))
            ->mapWithKeys(fn(ReflectionMethod $method) => [Str::snake($method->getName()) => $this->{$method->getName()}()])
            ->toArray();
    }
}
