// Copyright 2005, 2006 - Morten Nielsen (www.iter.dk)
//
// This file is part of SharpMap.
// SharpMap is free software; you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
// 
// SharpMap is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.

// You should have received a copy of the GNU Lesser General Public License
// along with SharpMap; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA 

using System;
using System.Collections.Generic;
using System.Text;

namespace SharpMap.CoordinateSystems
{
	/// <summary>
	/// Details of axis. This is used to label axes, and indicate the orientation.
	/// </summary>
	public class AxisInfo
    {
        private String _Name;
        private AxisOrientationEnum _Orientation;

		/// <summary>
		/// Initializes a new instance of an AxisInfo.
		/// </summary>
		/// <param name="name">Name of axis</param>
		/// <param name="orientation">Axis orientation</param>
		public AxisInfo(String name, AxisOrientationEnum orientation)
		{
			_Name = name;
			_Orientation = orientation;
		}

		/// <summary>
		/// Human readable name for axis. Possible values are X, Y, 
        /// Long, Lat or any other short String.
		/// </summary>
		public String Name
		{
			get { return _Name; }
			set { _Name = value; }
		}

		/// <summary>
		/// Gets enumerated value for orientation.
		/// </summary>
		public AxisOrientationEnum Orientation
		{
			get { return _Orientation; }
			set { _Orientation = value; }
		}

		/// <summary>
		/// Returns the Well-known text for this object
		/// as defined in the simple features specification.
		/// </summary>
		public String WKT
		{
			get
			{
				return String.Format("AXIS[\"{0}\", {1}]", Name, 
                    Orientation.ToString().ToUpper());
			}
		}
		/// <summary>
		/// Gets an XML representation of this object
		/// </summary>
		public String XML
		{
			get
			{
                return String.Format(Info.NumberFormat, 
                    "<CS_AxisInfo Name=\"{0}\" Orientation=\"{1}\"/>", Name, 
                    Orientation.ToString().ToUpper());
			}
		}

	}
}
