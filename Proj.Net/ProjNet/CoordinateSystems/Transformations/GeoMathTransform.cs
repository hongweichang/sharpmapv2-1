﻿// Portions copyright 2005 - 2006: Morten Nielsen (www.iter.dk)
// Portions copyright 2006 - 2008: Rory Plaire (codekaizen@gmail.com)
//
// This file is part of GeoAPI.Net.
// GeoAPI.Net is free software; you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
// 
// GeoAPI.Net is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.

// You should have received a copy of the GNU Lesser General Public License
// along with GeoAPI.Net; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA 

using System;
using System.Collections.Generic;
using GeoAPI.Coordinates;
using GeoAPI.CoordinateSystems;
using NPack.Interfaces;

namespace ProjNet.CoordinateSystems.Transformations
{
    public abstract class GeoMathTransform<TCoordinate> : MathTransform<TCoordinate>
        where TCoordinate : ICoordinate<TCoordinate>, IEquatable<TCoordinate>,
                            IComparable<TCoordinate>, IConvertible,
                            IComputable<Double, TCoordinate>
    {
        private readonly Double _e;
        private readonly Double _e2;
        private readonly Double _semiMajor;
        private readonly Double _semiMinor;

        protected GeoMathTransform(IEnumerable<Parameter> parameters,
                                   ICoordinateFactory<TCoordinate> coordinateFactory,
                                   Boolean isInverse)
            : base(parameters, coordinateFactory, isInverse)
        {

            Parameter semiMajorParam = null, semiMinorParam = null;

            foreach (Parameter p in parameters)
            {
                String name = p.Name;

                if (name.Equals("semi_major", StringComparison.OrdinalIgnoreCase))
                {
                    semiMajorParam = p;
                }

                if (name.Equals("semi_minor", StringComparison.OrdinalIgnoreCase))
                {
                    semiMinorParam = p;
                }
            }

            if (ReferenceEquals(semiMajorParam, null))
            {
                throw new ArgumentException("Missing projection parameter 'semi_major'.");
            }

            if (ReferenceEquals(semiMinorParam, null))
            {
                throw new ArgumentException("Missing projection parameter 'semi_minor'.");
            }

            _semiMajor = semiMajorParam.Value;
            _semiMinor = semiMinorParam.Value;

            _e2 = 1.0 - Math.Pow(_semiMinor / _semiMajor, 2);
            _e = Math.Sqrt(_e2);
        }

        public Double SemiMajor
        {
            get { return _semiMajor; }
        }

        public Double SemiMinor
        {
            get { return _semiMinor; }
        }

        protected Double E
        {
            get { return _e; }
        }

        protected Double E2
        {
            get { return _e2; }
        }
    }
}