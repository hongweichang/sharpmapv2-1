﻿/*
 *	This file is part of SharpMap.Demo.FormatConverter
 *  SharpMap.Demo.FormatConverter is free software © 2008 Newgrove Consultants Limited, 
 *  http://www.newgrove.com; you can redistribute it and/or modify it under the terms 
 *  of the current GNU Lesser General Public License (LGPL) as published by and 
 *  available from the Free Software Foundation, Inc., 
 *  59 Temple Place, Suite 330, Boston, MA 02111-1307 USA: http://fsf.org/    
 *  This program is distributed without any warranty; 
 *  without even the implied warranty of merchantability or fitness for purpose.  
 *  See the GNU Lesser General Public License for the full details. 
 *  
 *  Author: John Diss 2008
 * 
 */
using System;
using SharpMap.Data;
using SharpMap.Data.Providers;
using SharpMap.Demo.FormatConverter.Common;
using SharpMap.Expressions;
using SharpMap.Utilities;

namespace SharpMap.Demo.FormatConverter.SqlServer2008
{
    [ConfigureProvider(typeof (MsSqlServer2008Provider<>), "Sql Server 2008")]
    public class ConfigureSqlServer2008Provider : IConfigureFeatureSource
    {
        #region IConfigureFeatureSource Members

        public IFeatureProvider ConstructSourceProvider(IGeometryServices geometryServices)
        {
            throw new NotImplementedException();
        }

        public FeatureQueryExpression ConstructSourceQueryExpression()
        {
            return new FeatureQueryExpression(new AllAttributesExpression(), null);
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}